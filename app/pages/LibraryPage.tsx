"use client"

import { useState } from "react"
import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import { mockMediaItems } from "../data/mockData"
import { formatDate } from "../utils/helpers"
import type { MediaItem } from "../types"

export default function LibraryPage() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const types = [
    { id: "all", label: "Tất Cả", icon: "📚" },
    { id: "photo", label: "Ảnh", icon: "📷" },
    { id: "video", label: "Video", icon: "🎬" },
    { id: "document", label: "Tài Liệu", icon: "📄" },
  ]

  const collections = ["all", ...Array.from(new Set(mockMediaItems.map((item) => item.collection)))]

  const filteredMedia = mockMediaItems.filter((item) => {
    const typeMatch = selectedType === "all" || item.type === selectedType
    const collectionMatch = selectedCollection === "all" || item.collection === selectedCollection
    return typeMatch && collectionMatch
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Thư Viện Đa Phương Tiện"
          subtitle="Khám phá bộ sưu tập ảnh, video và tài liệu quý giá về thời kỳ bao cấp"
          align="left"
        />

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Type Filter */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">Loại Tài Liệu</h3>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-200 border-2 flex items-center gap-2 ${
                    selectedType === type.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground border-border hover:border-primary"
                  }`}
                >
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Collection Filter */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">Bộ Sưu Tập</h3>
            <div className="flex flex-wrap gap-2">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setSelectedCollection(collection)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    selectedCollection === collection
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-accent/20"
                  }`}
                >
                  {collection === "all" ? "Tất Cả" : collection}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground font-mono text-sm">
            Tìm thấy <span className="text-primary font-bold">{filteredMedia.length}</span> tài liệu
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item) => (
            <VintageCard key={item.id} hover className="cursor-pointer group" onClick={() => setSelectedMedia(item)}>
              <div className="aspect-[4/3] bg-gradient-to-br from-sepia-dark to-sepia-medium mb-4 overflow-hidden relative">
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 w-8 h-8 bg-primary/90 flex items-center justify-center text-primary-foreground text-lg">
                  {item.type === "photo" ? "📷" : item.type === "video" ? "🎬" : "📄"}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-foreground line-clamp-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-mono">{formatDate(item.date)}</p>
                <p className="text-sm text-foreground/70 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-xs font-mono">+{item.tags.length - 2}</span>
                  )}
                </div>
              </div>
            </VintageCard>
          ))}
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-ink-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="bg-card max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <VintageCard className="relative">
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors z-10"
                >
                  ✕
                </button>

                <div className="aspect-video bg-gradient-to-br from-sepia-dark to-sepia-medium mb-6">
                  <img
                    src={selectedMedia.url || "/placeholder.svg"}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="inline-block stamp-border px-4 py-2 bg-primary/10 mb-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-primary">
                        {selectedMedia.collection}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-2">{selectedMedia.title}</h2>
                    <p className="text-sm text-muted-foreground font-mono">{formatDate(selectedMedia.date)}</p>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed">{selectedMedia.description}</p>

                  <div>
                    <h4 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-2">Thẻ Tag</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-muted text-sm font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </VintageCard>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
