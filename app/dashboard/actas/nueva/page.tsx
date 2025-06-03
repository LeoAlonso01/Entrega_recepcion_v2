"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default function NuevaActaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const unidadId = searchParams.get("unidad")

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Aquí se conectaría con la API de PostgreSQL para guardar el acta
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/actas")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Nueva Acta de Entrega-Recepción</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Admin</span>
            <Button variant="outline" size="sm">
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/30 p-4">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/usuarios"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Usuarios
            </Link>
            <Link
              href="/dashboard/unidades"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Unidades Responsables
            </Link>
            <Link
              href="/dashboard/reportes"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Reportes
            </Link>
            <Link
              href="/dashboard/actas"
              className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Actas de Entrega
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link href="/dashboard/actas" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Volver a Actas
              </Link>
            </Button>

            <h2 className="text-3xl font-bold">Crear Nueva Acta de Entrega-Recepción</h2>
            <p className="text-muted-foreground">Complete el formulario para generar una nueva acta</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Información General</CardTitle>
                  <CardDescription>Datos básicos del acta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="unidad">Unidad Responsable</Label>
                    <Select defaultValue={unidadId || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar unidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Recursos Humanos</SelectItem>
                        <SelectItem value="2">Finanzas</SelectItem>
                        <SelectItem value="3">Sistemas</SelectItem>
                        <SelectItem value="4">Jurídico</SelectItem>
                        <SelectItem value="5">Administración</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fecha">Fecha</Label>
                    <Input id="fecha" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hora">Hora</Label>
                    <Input id="hora" type="time" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lugar">Lugar</Label>
                    <Input id="lugar" placeholder="Ubicación donde se celebra el acta" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Participantes</CardTitle>
                  <CardDescription>Personas involucradas en el acta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="auditor">Auditor Comisionado</Label>
                    <Select>
                      <SelectTrigger id="auditor">
                        <SelectValue placeholder="Seleccionar auditor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Juan Pérez</SelectItem>
                        <SelectItem value="2">María López</SelectItem>
                        <SelectItem value="3">Roberto González</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servidor-saliente">Servidor Público Saliente</Label>
                    <Select>
                      <SelectTrigger id="servidor-saliente">
                        <SelectValue placeholder="Seleccionar servidor saliente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Carlos Rodríguez</SelectItem>
                        <SelectItem value="2">Ana Martínez</SelectItem>
                        <SelectItem value="3">Roberto Gómez</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servidor-entrante">Servidor Público Entrante</Label>
                    <Select>
                      <SelectTrigger id="servidor-entrante">
                        <SelectValue placeholder="Seleccionar servidor entrante" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">María González</SelectItem>
                        <SelectItem value="2">José Sánchez</SelectItem>
                        <SelectItem value="3">Laura Díaz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Testigos</CardTitle>
                  <CardDescription>Testigos que validan el acta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="testigo1">Testigo 1</Label>
                      <Input id="testigo1" placeholder="Nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo1">Cargo Testigo 1</Label>
                      <Input id="cargo1" placeholder="Cargo o puesto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="testigo2">Testigo 2</Label>
                      <Input id="testigo2" placeholder="Nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo2">Cargo Testigo 2</Label>
                      <Input id="cargo2" placeholder="Cargo o puesto" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Observaciones</CardTitle>
                  <CardDescription>Información adicional relevante</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="Ingrese cualquier observación o nota importante para el acta" rows={5} />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => router.back()}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isLoading} className="gap-2">
                    <Save className="h-4 w-4" />
                    {isLoading ? "Guardando..." : "Guardar y Generar Acta"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
