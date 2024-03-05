import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}

            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />

            <div className="flex justify-end mt-7">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade))} className="bg-blue-500 mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className="bg-blue-500">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}