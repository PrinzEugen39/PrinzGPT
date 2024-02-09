export default function tourQuery(city, province) {
  return `Temukan ${city} yang tepat di ${province} ini di Indonesia.
  Jika ${city} dan ${province} ada, buatlah daftar hal-hal yang dapat dilakukan keluarga di ${city},${province} ini.
  Setelah Anda memiliki daftarnya, buatlah tur satu hari. Respons harus dalam format JSON berikut:
  {
    "tour": {
      "city": "${city}",s
      "province": "${province}",
      "title": "Judul tur",
      "description": "deskripsi singkat tentang kota dan wisata",
      "stops": ["paragraf pendek di pemberhentian 1", "paragraf pendek di pemberhentian 2"]
    }
  }
  Properti "stops" harus mencakup hanya dua perhentian.
  Jika Anda tidak dapat menemukan informasi mengenai ${city} secara pasti, atau ${city} tidak ada, atau populasinya kurang dari 1, atau lokasinya tidak berada di ${province} berikut atau di luar Indonesia, return { "tour": null }, tanpa karakter tambahan.`;
}
