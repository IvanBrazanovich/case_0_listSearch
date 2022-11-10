const [products, setProducts] = useState<Product[]>([]);
const [query, setQuery] = useState<string>("");

useEffect(() => {
  api.search(query).then(setProducts);

}, [query]);


useEffect(() => {
  api.search().then(setProducts)

}, []) 
console.log(products[0]?.price <= 100)
if(products?.length === 0) return <h1>Cargando</h1>

return (
  <main>
    <h1>Tienda digitaloncy</h1>
    <input name="text" placeholder="tv" type="text" onChange={(e) => setQuery(e.target.value)} />
    <ul>
      {products.map((product) => (
        <li className={`${product.price <= 100 ? "sale" : ""} `} key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span>$ {product.price}</span>
        </li>
      ))}
    </ul>
  </main>
);
}

export default App;
