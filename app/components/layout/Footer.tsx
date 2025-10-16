import { APP_NAME } from "../../config/constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: "Giới Thiệu", href: "/about" },
      { label: "Sứ Mệnh", href: "/mission" },
      { label: "Đội Ngũ", href: "/team" },
      { label: "Liên Hệ", href: "/contact" },
    ],
    resources: [
      { label: "Từ Điển Bao Cấp", href: "/dictionary" },
      { label: "Thư Viện", href: "/library" },
      { label: "Tài Liệu", href: "/documents" },
      { label: "FAQ", href: "/faq" },
    ],
    community: [
      { label: "Diễn Đàn", href: "/forum" },
      { label: "Câu Chuyện", href: "/stories" },
      { label: "Sự Kiện", href: "/events" },
      { label: "Đóng Góp", href: "/contribute" },
    ],
  }

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center stamp-border">
                <span className="text-primary-foreground font-bold text-xl">TĐ</span>
              </div>
              <h3 className="font-heading text-xl font-bold">{APP_NAME}</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Tái hiện và khám phá cuộc sống thời kỳ bao cấp Việt Nam (1976-1986) thông qua công nghệ và giáo dục.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-sm font-bold mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono uppercase tracking-wider text-sm font-bold mb-4">Tài Nguyên</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono uppercase tracking-wider text-sm font-bold mb-4">Cộng Đồng</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60 font-mono">
              © {currentYear} {APP_NAME}. Bảo lưu mọi quyền.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Chính Sách Bảo Mật
              </a>
              <a href="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Điều Khoản Sử Dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
