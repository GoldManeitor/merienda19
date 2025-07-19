import Comidas from "./comidas";

function Menu(props) {
  return (
    <div className="flex flex-col contenedorMenu">
      <h1>Comible</h1>
      <Comidas
        nombre={"Panqueques"}
        descrip={
          "Tortita que se hace con masa de harina, yemas de huevo batidas y un poco de leche. Se me hizo agua la cola."
        }
      />
      <Comidas
        nombre={"Bizcochuelo"}
        descrip={
          "No se en qué momento a alguien se le ocurrió hacer merengue, mezclarlo con yemas y harina pero gracias."
        }
      />
      <Comidas
        nombre={"Budin"}
        descrip={"Hacelo, no es difícil y en el super te afanan."}
      />
      <Comidas
        nombre={"Quemaditos agridulces"}
        descrip={"Dios en su septimo día se comió uno de estos."}
      />
      <Comidas
        nombre={"Medialuna dulce"}
        descrip={
          "No hay rival, no puede faltar en una merienda, puede ser tu salvación en el almuerzo, tu desayuno si sos un cheto tremendo y tu cena si sos un pobre."
        }
      />
      <Comidas
        nombre={"Medialuna salada"}
        descrip={
          "Opuesto a la anterior, incomible pero si sos un angurriento como yo... pasa."
        }
      />
      <Comidas
        nombre={"Sanguche caliente"}
        descrip={"El que le dice sandwitch es un hdp."}
      />
      <Comidas
        nombre={"Pastafrola"}
        descrip={
          "Dulce de leche siempre es mejor, pero aunque no te guste el membrillo te comes una pastafrolita, vibes de la escuela loco."
        }
      />
      <Comidas
        nombre={"Pizza cookie"}
        descrip={
          "Atrevido. Gustoso. ¿La combinación perfecta? Olvidate, esa era el princi y el mangüel."
        }
      />
      <Comidas
        nombre={"Palero a la mesa"}
        descrip={"Lo mejor de la carta, un buen varón."}
      />

      <h1>Bebible</h1>
      <Comidas
        nombre={"Chocolate caliente"}
        descrip={
          "Una perdición, la bebida por excelencia de una merienda como la gente en invierno. Si no pusiste chocolate caliente y te puntuaron alto... dejaaá"
        }
      />
      <Comidas
        nombre={"Fruta exprimida"}
        descrip={"No hay mucho que decir, tomátela toda."}
      />
      <Comidas
        nombre={"Café de máquina de cheto"}
        descrip={"Aguanten los chetos."}
      />
    </div>
  );
}

export default Menu;
