function Numero({ num }) {
  return (
    <div>{num}</div>
  )
}

export default function Home() {
  let numeros = [3, 4, 5, 6, 7, 23];
  let tags = numeros.map(numero => numero % 2 !== 0 && <Numero num={numero} />);

  return (
    <main>{tags}</main>
  );
}
