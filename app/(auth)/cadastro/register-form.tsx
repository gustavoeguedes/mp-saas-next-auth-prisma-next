'use client'

import { useActionState } from "react"
import { registerAction } from "./registerAction"
import Form from "next/form"
import { Label } from "../../../components/ui/label"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

export function RegisterForm() {
    const [state, formAction, isPending] = useActionState(registerAction, null)
    return (
        <>
            <Form action={formAction}>
                <div>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Fulano de Tal" />
                </div>
                <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com" />
                </div>
                <div>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" />
                </div>
                <div>
                <Button className="w-full mt-6" type="submit">
                    Registrar
                </Button>
                </div>
            </Form>
          </>
    )
}