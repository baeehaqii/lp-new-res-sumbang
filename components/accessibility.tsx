"use client"
import { School, Hospital, TreePine,ShoppingCart } from "lucide-react"

export default function Accessibility() {
  const facilities = [
{
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "5 menit dari Puskesmas Sumbang",
        "9 menit dari Klinik UMP",
        "20 menit dari RSUD Margono Soekarjo",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "4 menit dari SMP 2 Sumbang",
        "15 menit dari UMP",
        "15 menit dari Unsoed",
      ],
    },
    {
      icon: <ShoppingCart />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "9 menit dari Pasar Tambaksogra",
        "25 menit dari Rita Pasaraya",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "2 menit dari Provit Farm Village",
        "5 menit dari Taman Lazuardi",
        "13 menit dari Sanggaluri Park Purbalingga",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}