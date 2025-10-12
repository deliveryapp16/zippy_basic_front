"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Wrapper from "@/components/Wrapper";
import { PencilIcon, ArrowRightIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-cream ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="/images/home.png" alt="hero" />
        <div className="pt-6 flex flex-col gap-2 w-100 pb-8">
          <Button onClick={() => console.log("Normal")}>Normal</Button>
          <Button
            icon={PencilIcon}
            onClick={() => console.log("Normal con icono")}
          >
            Normal con ícono
          </Button>
          <Button loading onClick={() => console.log("Loading")}>
            Loading
          </Button>
          <Button disabled onClick={() => console.log("Disabled")}>
            Disabled
          </Button>
          <Button
            backgroundColor="bg-white"
            onClick={() => console.log("Fondo blanco")}
          >
            Fondo blanco
          </Button>
          <Button
            icon={PencilIcon}
            backgroundColor="bg-cream"
            onClick={() => console.log("Fondo crema con icono")}
          >
            Fondo crema con ícono
          </Button>
          <Button
            icon={ArrowRightIcon}
            onClick={() => console.log("Solo ícono")}
          />
          <Button width="w-20" onClick={() => console.log("Otro tamaño")}>
            Normal
          </Button>

          <Input
            icon={PencilIcon}
            placeholder="Escribe algo..."
            type="password"
          />
          <Input
            label="Nombre de usuario"
            labelGray
            icon={ArrowRightIcon}
            placeholder="Escribe algo..."
            height="h-14"
          />
          <Input
            label="Contraseña"
            icon={PencilIcon}
            placeholder="Escribe algo..."
            height="h-14"
            type="password"
          />
          <Input
            icon={PencilIcon}
            placeholder="Escribe algo..."
            height="h-14"
            width="w-60"
          />
          <Input
            icon={PencilIcon}
            placeholder="Escribe algo..."
            height="h-10"
            type="password"
            width="w-60"
          />
          <Input
            label="Input deshabilitado"
            placeholder="Escribe algo..."
            height="h-6"
            width="w-60"
            disabled
          />
          <Input
            label="Input deshabilitado password"
            placeholder="Escribe algo..."
            height="h-6"
            width="w-60"
            type="password"
            labelGray
            disabled
          />
          <Input label="Input unico numero" height="h-20" width="w-20" square />

          <Wrapper>wrapper</Wrapper>
          <Wrapper width="w-60" height="h-40">
            wrapper
          </Wrapper>
          <Wrapper width="w-auto" height="h-auto">
            <div className="flex flex-col gap-4 items-center">
              <p>Contenido adicional</p>
              <Input
                label="Input deshabilitado password"
                placeholder="Escribe algo..."
                type="password"
                labelGray
              />
              <Button>Botón dentro del Wrapper</Button>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
