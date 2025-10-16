"use client"

import { useState } from "react"
import SectionHeader from "../components/ui/SectionHeader"
import VintageCard from "../components/ui/VintageCard"
import { mockDictionaryEntries } from "../data/mockData"

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEntry, setSelectedEntry] = useState(mockDictionaryEntries[0])

  const filteredEntries = mockDictionaryEntries.filter((entry) =>
    entry.term.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Từ Điển Bao Cấp"
          subtitle="Khám phá ý nghĩa các thuật ngữ đặc trưng thời kỳ 1976-1986"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Term List */}
          <div className="lg:col-span-1">
            <VintageCard className="sticky top-24">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm thuật ngữ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-muted border-2 border-border focus:border-primary focus:outline-none font-mono text-sm"
                />
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredEntries.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry)}
                    className={`w-full text-left px-4 py-3 transition-all duration-200 border-l-4 ${
                      selectedEntry.id === entry.id
                        ? "bg-primary/10 border-primary text-primary font-bold"
                        : "bg-muted/50 border-transparent hover:border-primary/50 hover:bg-muted"
                    }`}
                  >
                    <span className="font-heading text-lg">{entry.term}</span>
                  </button>
                ))}
              </div>
            </VintageCard>
          </div>

          {/* Main Content - Term Details */}
          <div className="lg:col-span-2">
            <VintageCard className="mb-6">
              <div className="mb-6">
                <div className="inline-block stamp-border px-4 py-2 bg-primary/10 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">Thuật Ngữ</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground distressed-text mb-4">
                  {selectedEntry.term}
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-2">Định Nghĩa</h3>
                  <p className="text-lg text-foreground leading-relaxed">{selectedEntry.definition}</p>
                </div>

                <div className="border-t-2 border-border pt-6">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-2">Bối Cảnh</h3>
                  <p className="text-foreground/80 leading-relaxed">{selectedEntry.context}</p>
                </div>

                {selectedEntry.examples && selectedEntry.examples.length > 0 && (
                  <div className="border-t-2 border-border pt-6">
                    <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">Ví Dụ</h3>
                    <ul className="space-y-2">
                      {selectedEntry.examples.map((example, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-foreground/80">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-t-2 border-border pt-6">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold mb-3">
                    Thuật Ngữ Liên Quan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.relatedTerms.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const related = mockDictionaryEntries.find((e) => e.term === term)
                          if (related) setSelectedEntry(related)
                        }}
                        className="px-4 py-2 bg-muted border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 font-mono text-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </VintageCard>
          </div>
        </div>
      </div>
    </div>
  )
}
