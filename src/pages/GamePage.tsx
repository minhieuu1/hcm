"use client"

import { useState } from "react"
import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import VintageButton from "../components/ui/VintageButton"
import { formatNumber } from "../utils/helpers"

interface GameState {
  year: number
  month: number
  resources: {
    rice: number
    money: number
    stamps: number
  }
  family: {
    members: number
    health: number
    morale: number
  }
  reputation: number
  gameOver: boolean
  message: string
}

export default function GamePage() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameState, setGameState] = useState<GameState>({
    year: 1976,
    month: 1,
    resources: {
      rice: 50,
      money: 100,
      stamps: 10,
    },
    family: {
      members: 5,
      health: 80,
      morale: 70,
    },
    reputation: 50,
    gameOver: false,
    message: "Chào mừng đến với thời kỳ bao cấp. Hãy quản lý gia đình và tồn tại qua những năm tháng khó khăn.",
  })

  const startGame = () => {
    setGameStarted(true)
    setGameState({
      year: 1976,
      month: 1,
      resources: {
        rice: 50,
        money: 100,
        stamps: 10,
      },
      family: {
        members: 5,
        health: 80,
        morale: 70,
      },
      reputation: 50,
      gameOver: false,
      message: "Tháng 1/1976: Bạn bắt đầu cuộc sống trong thời kỳ bao cấp với gia đình 5 người.",
    })
  }

  const makeDecision = (decision: string) => {
    if (gameState.gameOver) return

    const newState = { ...gameState }
    let message = ""

    switch (decision) {
      case "work-cooperative":
        newState.resources.rice += 20
        newState.resources.money += 30
        newState.resources.stamps += 5
        newState.family.health -= 5
        newState.reputation += 10
        message = "Bạn làm việc chăm chỉ tại hợp tác xã. Nhận được gạo, tiền và tem phiếu. Uy tín tăng!"
        break

      case "home-production":
        newState.resources.rice += 15
        newState.family.morale += 10
        newState.family.health -= 3
        message = "Gia đình sản xuất tại nhà. Thu hoạch được một ít lương thực, tinh thần gia đình tốt hơn."
        break

      case "black-market":
        if (newState.resources.money >= 50) {
          newState.resources.money -= 50
          newState.resources.rice += 30
          newState.reputation -= 15
          message = "Bạn đi chợ đen mua gạo. Tốn tiền nhưng có thêm lương thực. Uy tín giảm!"
        } else {
          message = "Không đủ tiền để đi chợ đen!"
        }
        break

      case "rest":
        newState.family.health += 15
        newState.family.morale += 10
        newState.resources.rice -= 10
        message = "Gia đình nghỉ ngơi. Sức khỏe và tinh thần tốt hơn nhưng tiêu tốn lương thực."
        break
    }

    // Monthly consumption
    newState.resources.rice -= newState.family.members * 3
    newState.resources.money -= newState.family.members * 2

    // Advance time
    newState.month += 1
    if (newState.month > 12) {
      newState.month = 1
      newState.year += 1
    }

    // Check game over conditions
    if (newState.resources.rice <= 0) {
      newState.gameOver = true
      message = "HẾT GẠO! Gia đình bạn không thể tồn tại. Trò chơi kết thúc."
    } else if (newState.family.health <= 0) {
      newState.gameOver = true
      message = "SỨC KHỎE KIỆT QUỆ! Gia đình bạn không thể tiếp tục. Trò chơi kết thúc."
    } else if (newState.year >= 1987) {
      newState.gameOver = true
      message = "CHIẾN THẮNG! Bạn đã vượt qua thời kỳ bao cấp và đến năm Đổi Mới 1986!"
    }

    newState.message = message
    setGameState(newState)
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <SectionHeader title="Cuộc Sống Thời Bao Cấp" subtitle="Web game chiến lược sinh tồn" align="center" />

          <div className="max-w-4xl mx-auto">
            <VintageCard className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sepia-dark to-sepia-medium rounded-full flex items-center justify-center text-6xl mb-6">
                  🎮
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Chào Mừng Đến Với Trò Chơi</h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Bạn sẽ quản lý một gia đình trong thời kỳ bao cấp (1976-1986). Đưa ra quyết định khôn ngoan để duy trì
                  lương thực, sức khỏe và uy tín xã hội. Mục tiêu: Tồn tại đến năm Đổi Mới 1986!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-muted/30 border-2 border-border">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Lao Động</h3>
                  <p className="text-sm text-muted-foreground">Làm việc tại hợp tác xã để kiếm tem phiếu</p>
                </div>
                <div className="p-6 bg-muted/30 border-2 border-border">
                  <div className="text-4xl mb-3">🏠</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Sản Xuất</h3>
                  <p className="text-sm text-muted-foreground">Trồng trọt và chăn nuôi tại nhà</p>
                </div>
                <div className="p-6 bg-muted/30 border-2 border-border">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-heading text-lg font-bold mb-2">Trao Đổi</h3>
                  <p className="text-sm text-muted-foreground">Mua bán tại chợ đen khi cần thiết</p>
                </div>
              </div>

              <VintageButton variant="primary" size="lg" onClick={startGame}>
                Bắt Đầu Trò Chơi
              </VintageButton>
            </VintageCard>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Game Header */}
          <div className="mb-8">
            <VintageCard className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                    Tháng {gameState.month}/{gameState.year}
                  </h1>
                  <p className="text-muted-foreground font-mono">
                    {gameState.year === 1976 && "Thời kỳ đầu bao cấp"}
                    {gameState.year >= 1977 && gameState.year <= 1980 && "Giai đoạn khó khăn"}
                    {gameState.year >= 1981 && gameState.year <= 1985 && "Thời kỳ ổn định"}
                    {gameState.year >= 1986 && "Chuẩn bị Đổi Mới"}
                  </p>
                </div>
                <VintageButton variant="outline" size="sm" onClick={() => setGameStarted(false)}>
                  Chơi Lại
                </VintageButton>
              </div>
            </VintageCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Resources Panel */}
            <VintageCard>
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-4">Nguồn Lực</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">🌾 Gạo</span>
                    <span className="font-bold text-lg">{formatNumber(gameState.resources.rice)} kg</span>
                  </div>
                  <div className="h-2 bg-muted border border-border overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${Math.min((gameState.resources.rice / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">💰 Tiền</span>
                    <span className="font-bold text-lg">{formatNumber(gameState.resources.money)} đồng</span>
                  </div>
                  <div className="h-2 bg-muted border border-border overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${Math.min((gameState.resources.money / 200) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">🎫 Tem Phiếu</span>
                    <span className="font-bold text-lg">{formatNumber(gameState.resources.stamps)} tờ</span>
                  </div>
                  <div className="h-2 bg-muted border border-border overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${Math.min((gameState.resources.stamps / 20) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </VintageCard>

            {/* Family Panel */}
            <VintageCard>
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-4">Gia Đình</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">👨‍👩‍👧‍👦 Thành Viên</span>
                    <span className="font-bold text-lg">{gameState.family.members} người</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">❤️ Sức Khỏe</span>
                    <span className="font-bold text-lg">{gameState.family.health}%</span>
                  </div>
                  <div className="h-2 bg-muted border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${gameState.family.health}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">😊 Tinh Thần</span>
                    <span className="font-bold text-lg">{gameState.family.morale}%</span>
                  </div>
                  <div className="h-2 bg-muted border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${gameState.family.morale}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </VintageCard>

            {/* Reputation Panel */}
            <VintageCard>
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-4">Uy Tín</h3>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-primary mb-2">{gameState.reputation}</div>
                <p className="text-sm text-muted-foreground font-mono">
                  {gameState.reputation >= 80 && "Gương Mẫu"}
                  {gameState.reputation >= 50 && gameState.reputation < 80 && "Trung Bình"}
                  {gameState.reputation < 50 && "Cần Cải Thiện"}
                </p>
              </div>
              <div className="h-3 bg-muted border-2 border-border overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${gameState.reputation}%` }}
                ></div>
              </div>
            </VintageCard>
          </div>

          {/* Message Box */}
          <VintageCard className={`mb-6 ${gameState.gameOver ? "border-4 border-primary" : ""}`}>
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">
                {gameState.gameOver ? (gameState.year >= 1987 ? "🎉" : "💀") : "📢"}
              </div>
              <div className="flex-1">
                <p className="text-lg text-foreground leading-relaxed">{gameState.message}</p>
              </div>
            </div>
          </VintageCard>

          {/* Actions */}
          {!gameState.gameOver && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <VintageCard hover className="cursor-pointer" onClick={() => makeDecision("work-cooperative")}>
                <div className="text-center">
                  <div className="text-5xl mb-3">⚙️</div>
                  <h4 className="font-heading text-lg font-bold mb-2">Làm Việc</h4>
                  <p className="text-sm text-muted-foreground mb-3">Lao động tại hợp tác xã</p>
                  <div className="text-xs text-accent font-mono">+20 gạo, +30 tiền, +5 tem</div>
                </div>
              </VintageCard>

              <VintageCard hover className="cursor-pointer" onClick={() => makeDecision("home-production")}>
                <div className="text-center">
                  <div className="text-5xl mb-3">🏠</div>
                  <h4 className="font-heading text-lg font-bold mb-2">Sản Xuất</h4>
                  <p className="text-sm text-muted-foreground mb-3">Trồng trọt tại nhà</p>
                  <div className="text-xs text-accent font-mono">+15 gạo, +10 tinh thần</div>
                </div>
              </VintageCard>

              <VintageCard hover className="cursor-pointer" onClick={() => makeDecision("black-market")}>
                <div className="text-center">
                  <div className="text-5xl mb-3">🤝</div>
                  <h4 className="font-heading text-lg font-bold mb-2">Chợ Đen</h4>
                  <p className="text-sm text-muted-foreground mb-3">Mua gạo giá cao</p>
                  <div className="text-xs text-primary font-mono">-50 tiền, +30 gạo, -15 uy tín</div>
                </div>
              </VintageCard>

              <VintageCard hover className="cursor-pointer" onClick={() => makeDecision("rest")}>
                <div className="text-center">
                  <div className="text-5xl mb-3">😴</div>
                  <h4 className="font-heading text-lg font-bold mb-2">Nghỉ Ngơi</h4>
                  <p className="text-sm text-muted-foreground mb-3">Phục hồi sức khỏe</p>
                  <div className="text-xs text-accent font-mono">+15 sức khỏe, +10 tinh thần</div>
                </div>
              </VintageCard>
            </div>
          )}

          {gameState.gameOver && (
            <div className="text-center">
              <VintageButton variant="primary" size="lg" onClick={startGame}>
                Chơi Lại
              </VintageButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
