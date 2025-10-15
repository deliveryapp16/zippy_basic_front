import Button from "@/components/Button";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <section className="w-full h-auto flex justify-center pt-20">
      <div className="md:w-2/5 w-4/5 flex flex-col items-center gap-10">
        <h1 className="md:text-6xl text-5xl font-semibold text-center text-carbonGray md:text-wrap text-balance">
          La Fuerza detrás de tus Entregas con
          <span className="font-extrabold text-emeraldGreen"> Zipy</span>
        </h1>
        <p className="font-medium text-xl text-center text-carbonGray">
          Domina tus pedidos con agilidad y control total. <br />
          ¡Impulsa tu restaurante hoy!
        </p>
        <Button width="w-60" onClick={() => router.push("/landing")}>
          ¡Empezar ahora!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
