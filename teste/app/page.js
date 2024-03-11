
export default function Home() {

  function Numero({ num }) {
    return (
      <div>{num}</div>
    )
  }

  let numeros = [3, 4, 5, 6, 7, 23];
  let tags = numeros.map(numero => <Numero num={numero} />);

  return (
    <main>{tags}</main>
  );
}
