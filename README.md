# Tổng Cục Tem Phiếu

Tái hiện và khám phá cuộc sống thời kỳ bao cấp Việt Nam (1976-1986) thông qua sự kết hợp giữa công nghệ và giáo dục.

## Tính Năng Chính

### 🎮 Web Game Chiến Lược
- Mô phỏng cuộc sống thời bao cấp
- Quản lý nguồn lực: gạo, tiền, tem phiếu
- Đưa ra quyết định để tồn tại và phát triển
- Đối mặt với các sự kiện lịch sử ngẫu nhiên

### 📖 Từ Điển Bao Cấp
- Giải thích các thuật ngữ đặc trưng thời kỳ 1976-1986
- Tìm kiếm và khám phá ý nghĩa
- Thuật ngữ liên quan và ví dụ thực tế

### 📝 Câu Chuyện Đời Thường
- Những câu chuyện chân thực từ người dân
- Phân loại theo chủ đề: đời thường, lao động, gia đình
- Nội dung giáo dục và cảm động

### 🎤 Phỏng Vấn Nhân Chứng
- Chia sẻ trực tiếp từ người đã sống qua thời bao cấp
- Ghi âm và video phỏng vấn
- Những bài học quý giá từ lịch sử

### 📚 Thư Viện Đa Phương Tiện
- Bộ sưu tập ảnh lịch sử
- Video tư liệu
- Tài liệu quý giá
- Lọc theo loại và bộ sưu tập

### 📋 Sổ Hộ Khẩu Kỹ Thuật Số
- Hệ thống game hóa địa vị xã hội
- Tích điểm cống hiến
- Bảng xếp hạng toàn quốc
- Đặc quyền theo cấp bậc

## Công Nghệ Sử Dụng

- **Frontend**: Next.js 15 + React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display, Courier Prime, Noto Serif

## Cấu Trúc Dự Án

```
app/                   # Next.js App Router
├── layout.tsx         # Root layout
├── page.tsx          # Home page
├── game/page.tsx     # Game page
├── dictionary/page.tsx # Dictionary page
└── ...               # Other pages

src/                   # Source code
├── components/        # React components
├── pages/            # Page components
├── data/             # Mock data
├── types/            # TypeScript types
├── utils/            # Helper functions
└── config/           # Configuration files
```

## Cài Đặt và Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Start production server
npm start
```

## Thiết Kế

Website sử dụng phong cách vintage Việt Nam thời bao cấp với:
- Màu sắc sepia và nâu cổ điển
- Typography cổ điển (Playfair Display)
- Hiệu ứng tem phiếu và giấy cũ
- Giao diện báo chí thời kỳ 1976-1986

## Đóng Góp

Dự án này nhằm mục đích giáo dục và bảo tồn lịch sử. Mọi đóng góp về nội dung, tài liệu, và câu chuyện đều được hoan nghênh.

## Giấy Phép

© 2025 Tổng Cục Tem Phiếu. Bảo lưu mọi quyền.