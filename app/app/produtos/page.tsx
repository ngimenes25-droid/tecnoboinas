const produtos = [
{ id: 1, nome: "Boina de Corte", preco: 59.9 },
{ id: 2, nome: "Boina de Refino", preco: 54.9 },
{ id: 3, nome: "Boina de Lustro", preco: 49.9 },
];


export default function Produtos() {
return (
<main className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-3xl font-bold mb-10">Produtos</h2>
<div className="grid md:grid-cols-3 gap-8">
{produtos.map((p) => (
<div key={p.id} className="border rounded-2xl p-6">
<h3 className="text-xl font-semibold mb-2">{p.nome}</h3>
<p className="text-lg font-bold mb-4">R$ {p.preco.toFixed(2)}</p>
<a
href={`https://wa.me/5516982014276?text=Quero%20comprar%20${p.nome}`}
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>
Comprar
</a>
</div>
))}
</div>
</main>
);
}
