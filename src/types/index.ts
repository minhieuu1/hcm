// Core Types for Tổng Cục Tem Phiếu

export interface User {
  id: string
  name: string
  householdId: string
  rank: string
  contributionPoints: number
  registrationDate: string
  avatar?: string
}

export interface HouseholdRecord {
  id: string
  headOfHousehold: string
  members: number
  address: string
  ward: string
  district: string
  city: string
  registrationDate: string
  status: "active" | "inactive"
  contributionPoints: number
  rank: number
  privileges: string[]
}

export interface RationStamp {
  id: string
  type: "rice" | "meat" | "sugar" | "cloth" | "oil" | "general"
  quantity: number
  unit: string
  validFrom: string
  validUntil: string
  used: boolean
}

export interface HistoricalEvent {
  id: string
  date: string
  title: string
  description: string
  category: "economic" | "political" | "social" | "cultural"
  impact: string
  images?: string[]
}

export interface DictionaryEntry {
  id: string
  term: string
  definition: string
  context: string
  relatedTerms: string[]
  examples?: string[]
}

export interface Story {
  id: string
  title: string
  author: string
  date: string
  content: string
  category: "daily-life" | "work" | "family" | "community"
  tags: string[]
  featured: boolean
}

export interface Interview {
  id: string
  interviewee: string
  role: string
  date: string
  location: string
  transcript: string
  audioUrl?: string
  videoUrl?: string
  highlights: string[]
}

export interface MediaItem {
  id: string
  title: string
  type: "photo" | "video" | "document"
  url: string
  thumbnail?: string
  description: string
  date: string
  tags: string[]
  collection: string
}

export interface GameState {
  playerId: string
  level: number
  resources: {
    rice: number
    money: number
    stamps: number
  }
  familyMembers: number
  reputation: number
  completedMissions: string[]
  currentMission?: string
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  name: string
  points: number
  achievements: string[]
  badge: string
}
