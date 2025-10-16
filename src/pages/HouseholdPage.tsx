"use client"

import { useState } from "react"
import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import VintageButton from "../components/ui/VintageButton"
import { mockHouseholdRecord, mockLeaderboard } from "../data/mockData"
import { formatDate, formatNumber } from "../utils/helpers"
import { CONTRIBUTION_RANKS } from "../config/constants"

export default function HouseholdPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "leaderboard" | "privileges">("profile")

  const currentRank = CONTRIBUTION_RANKS.find(
    (r) =>
      mockHouseholdRecord.contributionPoints >= r.minPoints &&
      mockHouseholdRecord.contributionPoints <
        (CONTRIBUTION_RANKS.find((rank) => rank.level === r.level + 1)?.minPoints || Number.POSITIVE_INFINITY),
  )

  const nextRank = CONTRIBUTION_RANKS.find((r) => r.level === (currentRank?.level || 0) + 1)
  const progressToNextRank = nextRank
    ? ((mockHouseholdRecord.contributionPoints - (currentRank?.minPoints || 0)) /
        (nextRank.minPoints - (currentRank?.minPoints || 0) || 1)) *
      100
    : 100

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Sổ Hộ Khẩu Kỹ Thuật Số"
          subtitle="Hệ thống quản lý địa vị xã hội và điểm cống hiến"
          align="left"
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "profile", label: "Hồ Sơ", icon: "📋" },
            { id: "leaderboard", label: "Bảng Xếp Hạng", icon: "🏆" },
            { id: "privileges", label: "Đặc Quyền", icon: "🎁" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-200 border-2 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Household Info Card */}
            <div className="lg:col-span-2 space-y-6">
              <VintageCard stamp className="bg-gradient-to-br from-card to-muted/30">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block stamp-border px-4 py-2 bg-primary/10 mb-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-primary">Sổ Hộ Khẩu</span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                      {mockHouseholdRecord.headOfHousehold}
                    </h2>
                    <p className="text-muted-foreground font-mono text-sm">Mã số: {mockHouseholdRecord.id}</p>
                  </div>
                  <div
                    className="w-20 h-20 flex items-center justify-center text-4xl border-4 rounded-full"
                    style={{ borderColor: currentRank?.color }}
                  >
                    {currentRank?.level === 5 ? "🏆" : currentRank?.level === 4 ? "⭐" : "👤"}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">
                      Số Thành Viên
                    </p>
                    <p className="text-2xl font-bold text-foreground">{mockHouseholdRecord.members} người</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">
                      Ngày Đăng Ký
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {formatDate(mockHouseholdRecord.registrationDate)}
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-border pt-6">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-2">Địa Chỉ</p>
                  <p className="text-lg text-foreground">
                    {mockHouseholdRecord.address}, {mockHouseholdRecord.ward}
                    <br />
                    {mockHouseholdRecord.district}, {mockHouseholdRecord.city}
                  </p>
                </div>
              </VintageCard>

              {/* Contribution Points */}
              <VintageCard>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Điểm Cống Hiến</h3>

                <div className="mb-6">
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <p className="text-5xl font-bold text-primary">
                        {formatNumber(mockHouseholdRecord.contributionPoints)}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono mt-1">Tổng điểm tích lũy</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold" style={{ color: currentRank?.color }}>
                        {currentRank?.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">Cấp bậc hiện tại</p>
                    </div>
                  </div>
                </div>

                {nextRank && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                        Tiến độ đến {nextRank.name}
                      </p>
                      <p className="text-sm font-bold text-primary">{Math.round(progressToNextRank)}%</p>
                    </div>
                    <div className="h-4 bg-muted border-2 border-border overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progressToNextRank}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      Còn {formatNumber(nextRank.minPoints - mockHouseholdRecord.contributionPoints)} điểm nữa
                    </p>
                  </div>
                )}
              </VintageCard>
            </div>

            {/* Rank System Sidebar */}
            <div className="lg:col-span-1">
              <VintageCard className="sticky top-24">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Hệ Thống Cấp Bậc</h3>
                <div className="space-y-3">
                  {CONTRIBUTION_RANKS.map((rank) => (
                    <div
                      key={rank.level}
                      className={`p-4 border-2 transition-all duration-200 ${
                        currentRank?.level === rank.level
                          ? "border-primary bg-primary/10"
                          : "border-border bg-muted/30 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading text-lg font-bold" style={{ color: rank.color }}>
                          {rank.name}
                        </span>
                        <span className="text-2xl">
                          {rank.level === 5 ? "🏆" : rank.level === 4 ? "⭐" : rank.level === 3 ? "🎖️" : "📌"}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground">Từ {formatNumber(rank.minPoints)} điểm</p>
                    </div>
                  ))}
                </div>
              </VintageCard>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="max-w-5xl mx-auto">
            <VintageCard>
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Bảng Xếp Hạng Toàn Quốc</h3>
                <p className="text-muted-foreground">Top những công dân có điểm cống hiến cao nhất</p>
              </div>

              <div className="space-y-4">
                {mockLeaderboard.map((entry) => (
                  <div
                    key={entry.userId}
                    className={`p-6 border-2 transition-all duration-200 hover:shadow-lg ${
                      entry.rank <= 3 ? "border-primary bg-primary/5" : "border-border bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Rank Badge */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 flex items-center justify-center text-3xl font-bold border-4 rounded-full ${
                            entry.rank === 1
                              ? "bg-[#ffd700] border-[#ffd700] text-white"
                              : entry.rank === 2
                                ? "bg-[#c0c0c0] border-[#c0c0c0] text-white"
                                : entry.rank === 3
                                  ? "bg-[#cd7f32] border-[#cd7f32] text-white"
                                  : "bg-muted border-border text-foreground"
                          }`}
                        >
                          {entry.rank <= 3 ? entry.badge : entry.rank}
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex-1">
                        <h4 className="font-heading text-xl font-bold text-foreground mb-1">{entry.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {entry.achievements.map((achievement, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-accent/20 text-accent text-xs font-mono uppercase tracking-wider"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Points */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-3xl font-bold text-primary">{formatNumber(entry.points)}</p>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Điểm</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <VintageButton variant="outline">Xem Thêm</VintageButton>
              </div>
            </VintageCard>
          </div>
        )}

        {/* Privileges Tab */}
        {activeTab === "privileges" && (
          <div className="max-w-4xl mx-auto">
            <VintageCard className="mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Đặc Quyền Hiện Tại</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockHouseholdRecord.privileges.map((privilege, index) => (
                  <div key={index} className="p-4 bg-primary/10 border-2 border-primary text-center">
                    <div className="text-4xl mb-2">✓</div>
                    <p className="font-mono text-sm uppercase tracking-wider text-foreground">{privilege}</p>
                  </div>
                ))}
              </div>
            </VintageCard>

            <VintageCard>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Đặc Quyền Theo Cấp Bậc</h3>
              <div className="space-y-6">
                {[
                  {
                    rank: "Công Dân",
                    privileges: ["Tham gia hoạt động cộng đồng", "Nhận tem phiếu cơ bản"],
                    locked: false,
                  },
                  {
                    rank: "Lao Động Tiên Tiến",
                    privileges: ["Ưu tiên mua hàng", "Tham gia đào tạo", "Nhận thưởng quý"],
                    locked: false,
                  },
                  {
                    rank: "Chiến Sĩ Thi Đua",
                    privileges: ["Tham gia hội nghị", "Nhận thưởng đặc biệt", "Ưu tiên nhà ở"],
                    locked: false,
                  },
                  {
                    rank: "Anh Hùng Lao Động",
                    privileges: ["Gặp lãnh đạo", "Nhận huy chương", "Ưu tiên y tế", "Du lịch miễn phí"],
                    locked: true,
                  },
                  {
                    rank: "Anh Hùng Cách Mạng",
                    privileges: [
                      "Vinh danh toàn quốc",
                      "Lương hưu đặc biệt",
                      "Ưu tiên tuyệt đối",
                      "Tượng đài tưởng niệm",
                    ],
                    locked: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 border-2 ${item.locked ? "border-border bg-muted/20 opacity-60" : "border-primary bg-primary/5"}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-heading text-xl font-bold text-foreground">{item.rank}</h4>
                      {item.locked && (
                        <span className="px-3 py-1 bg-muted text-xs font-mono uppercase tracking-wider">🔒 Khóa</span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {item.privileges.map((privilege, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-foreground/80">{privilege}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </VintageCard>
          </div>
        )}
      </div>
    </div>
  )
}
