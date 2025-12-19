export default function Home() {
return (
<main className="min-h-screen bg-white text-gray-900">
<header className="border-b">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold">TecnoBoinas</h1>
<a
href="https://wa.me/5516982014276"
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>
Comprar pelo WhatsApp
</a>
</div>
</header>


<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
<div>
<h2 className="text-4xl font-bold mb-4">
Boinas de Polimento Profissional
</h2>
<p className="text-lg text-gray-600 mb-6">
Produção própria em Ribeirão Preto – SP. Qualidade profissional com preço direto de fábrica.
</p>
<a
href="/produtos"
className="bg-yellow-400 px-6 py-3 rounded-xl font-semibold"
>
Ver Produtos
</a>
</div>
</section>
</main>
);
}
