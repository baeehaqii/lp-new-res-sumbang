"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dqobwse9q/image/upload/w_700,h_400,c_fill,f_auto,q_auto:eco/v1764387070/Enscape_2025-09-25-15-08-12_VIEW_1_oakaaq.avif"
                alt="Sapphire Residence Sumbang"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Residence Sumbang</h2>
              <p className="about-description">
                Sapphire Residence Sumbang menghadirkan pengalaman tinggal yang menyehatkan dan bernilai jangka panjang. Mengusung konsep One Stop Healthy Living, perumahan Purwokerto ini dirancang untuk keluarga modern yang ingin menikmati udara segar pegunungan dan lingkungan hijau tanpa meninggalkan kemudahan akses kota. Berlokasi di Jl. Raya Baturaden Timur, Desa Ciberem, Kecamatan Sumbang, Banyumas, proyek ini bukan hanya tempat tinggal, tapi juga peluang investasi ideal di kawasan wisata Baturaden yang terus berkembang.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Lokasi Terbaik di Jawa Bagian Selatan</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10.000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Proyek Unggulan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Residence Sumbang</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/w_700,h_400,c_fill,f_auto,q_auto:eco/v1764387070/Enscape_2025-09-25-15-08-12_VIEW_1_oakaaq.avif"
                  alt="Sapphire Residence Sumbang"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Sapphire Residence Sumbang menghadirkan pengalaman tinggal yang menyehatkan dan bernilai jangka panjang. Mengusung konsep One Stop Healthy Living, perumahan Purwokerto ini dirancang untuk keluarga modern yang ingin menikmati udara segar pegunungan dan lingkungan hijau tanpa meninggalkan kemudahan akses kota. Berlokasi di Jl. Raya Baturaden Timur, Desa Ciberem, Kecamatan Sumbang, Banyumas, proyek ini bukan hanya tempat tinggal, tapi juga peluang investasi ideal di kawasan wisata Baturaden yang terus berkembang.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>5 menit ke fasilitas kesehatan</li>
                  <li>3 menit ke fasilitas pendidikan</li>
                  <li>2 menit ke fasilitas perbelanjaan</li>
                  <li>Bebas polusi dan kebisingan kota</li>
                  <li>Dikelilingi pemandangan alam yang asri</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan one gate system</li>
                  <li>Akses jalan lebar, mempermudah mobilitas</li>
                  <li>Akses ke jalan raya dekat, mudah mengakses transportasi umum</li>
                  <li>Ruang terbuka hijau yang luas dengan pemandangan Gunung Slamet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
