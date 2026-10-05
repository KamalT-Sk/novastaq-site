const partners = [
  { name: 'Novaprime Group', src: '/partners/novaprime.png' },
  { name: 'SuperteamNG', src: '/partners/marks/superteamng.png' },
  { name: 'Solana Foundation', src: '/partners/marks/solana.png' },
  { name: 'Bread', src: '/partners/marks/bread.png' },
  { name: 'Stakepadi', src: '/partners/marks/stakepadi.png' },
  { name: 'Tsara', src: '/partners/marks/tsara.png' },
  { name: 'Velcro', src: '/partners/velcro.png' },
  { name: 'Dliva', src: '/partners/dliva.png' },
  { name: 'MyArteLab', src: '/partners/marks/myartelab.png' },
];

export function PartnersSection() {
  return (
    <section className="py-16 border-y border-black/[0.06]">
      <p className="text-center text-[13px] text-[#a1a1aa] mb-8">Strategic partners</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-slide-infinite">
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex items-center mx-8 h-10" title={p.name}>
              <img
                src={p.src}
                alt={i < partners.length ? p.name : ''}
                className="h-9 w-auto max-w-[150px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
