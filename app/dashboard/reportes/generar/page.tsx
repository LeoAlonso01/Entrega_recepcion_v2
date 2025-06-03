"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

export default function GenerarReportePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const unidadId = searchParams.get("unidad")

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Aquí se conectaría con la API de PostgreSQL para generar el reporte
    setTimeout(() => {
      setIsLoading(false)
      // Simular descarga de PDF
      alert("Reporte generado correctamente")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Generar Reporte</h1>
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
              className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Reportes
            </Link>
            <Link
              href="/dashboard/actas"
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Actas de Entrega
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link href="/dashboard/reportes" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Volver a Reportes
              </Link>
            </Button>

            <h2 className="text-3xl font-bold">Generar Reporte</h2>
            <p className="text-muted-foreground">Seleccione los parámetros para generar un reporte en PDF</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Reporte</CardTitle>
                  <CardDescription>Datos básicos para el reporte</CardDescription>
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
                    <Label htmlFor="tipo-reporte">Tipo de Reporte</Label>
                    <Select>
                      <SelectTrigger id="tipo-reporte">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="completo">Reporte Completo</SelectItem>
                        <SelectItem value="recursos">Recursos Materiales</SelectItem>
                        <SelectItem value="personal">Recursos Humanos</SelectItem>
                        <SelectItem value="documentos">Archivos Documentales</SelectItem>
                        <SelectItem value="juridico">Marco Jurídico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="formato">Formato</Label>
                    <Select defaultValue="pdf">
                      <SelectTrigger id="formato">
                        <SelectValue placeholder="Seleccionar formato" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secciones a Incluir</CardTitle>
                  <CardDescription>Seleccione las secciones que desea incluir en el reporte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recursos" defaultChecked />
                    <Label htmlFor="recursos">Recursos Materiales</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="personal" defaultChecked />
                    <Label htmlFor="personal">Personal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="documentos" defaultChecked />
                    <Label htmlFor="documentos">Archivos Documentales</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marco-juridico" defaultChecked />
                    <Label htmlFor="marco-juridico">Marco Jurídico</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="asuntos" defaultChecked />
                    <Label htmlFor="asuntos">Asuntos Generales</Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                    <FileText className="h-4 w-4" />
                    {isLoading ? "Generando..." : "Generar Reporte"}
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
