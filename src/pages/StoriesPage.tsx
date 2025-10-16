"use client"

import { useState } from "react"
import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import VintageButton from "../components/ui/VintageButton"
import { mockStories } from "../data/mockData"
import { formatDate } from "../utils/helpers"

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "Tất Cả" },
    { id: "daily-life", label: "Đời Thường" },
    { id: "work", label: "Lao Động" },
    { id: "family", label: "Gia Đình" },
    { id: "community", label: "Cộng Đồng" },
  ]

  const filteredStories =
    selectedCategory === "all" ? mockStories : mockStories.filter((story) => story.category === selectedCategory)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Câu Chuyện Đời Thường"
          subtitle="Những câu chuyện chân thực về cuộc sống thời bao cấp"
          align="left"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-200 border-2 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        {filteredStories.find((s) => s.featured) && (
          <VintageCard className="mb-12 bg-gradient-to-br from-card to-muted/30" hover>
            <div className="stamp-border px-4 py-2 bg-primary/10 inline-block mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">Nổi Bật</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {filteredStories.find((s) => s.featured)!.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="font-mono">{filteredStories.find((s) => s.featured)!.author}</span>
              <span>•</span>
              <span>{formatDate(filteredStories.find((s) => s.featured)!.date)}</span>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {filteredStories.find((s) => s.featured)!.content}
            </p>
            <VintageButton variant="primary">Đọc Tiếp</VintageButton>
          </VintageCard>
        )}

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories
            .filter((s) => !s.featured)
            .map((story) => (
              <VintageCard key={story.id} hover className="flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{story.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="font-mono">{story.author}</span>
                  <span>•</span>
                  <span>{formatDate(story.date)}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1 line-clamp-4">{story.content}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-xs font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <VintageButton variant="outline" size="sm">
                  Đọc Thêm
                </VintageButton>
              </VintageCard>
            ))}
        </div>
      </div>
    </div>
  )
}
