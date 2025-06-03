import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, FileText, Users, Archive, Book, Briefcase, FileCheck } from "lucide-react"

export default function UnidadDetalle({ params }: { params: { id: string } }) {
  // En una implementación real, aquí se obtendría la información de la unidad desde la API
  const unidad = {
    id: Number.parseInt(params.id),
    nombre: "Recursos Humanos",
    responsable: "María González",
    fechaCreacion: "15/01/2023",
    descripcion: "Departamento encargado de la gestión del personal y recursos humanos de la organización.",
    recursos: [
      { id: 1, tipo: "Material", nombre: "Computadoras", cantidad: 10 },
      { id: 2, tipo: "Material", nombre: "Impresoras", cantidad: 3 },
      { id: 3, tipo: "Material", nombre: "Escritorios", cantidad: 12 },
    ],
    personal: [
      { id: 1, nombre: "Juan Pérez", cargo: "Analista de RRHH", fechaIngreso: "10/03/2020" },
      { id: 2, nombre: "Ana López", cargo: "Reclutador", fechaIngreso: "05/06/2021" },
      { id: 3, nombre: "Carlos Rodríguez", cargo: "Asistente", fechaIngreso: "15/01/2022" },
    ],
    documentos: [
      { id: 1, nombre: "Manual de Procedimientos", tipo: "PDF", fechaCreacion: "10/02/2022" },
      { id: 2, nombre: "Organigrama", tipo: "PDF", fechaCreacion: "15/03/2022" },
      { id: 3, nombre: "Políticas de Contratación", tipo: "DOCX", fechaCreacion: "20/04/2022" },
    ],
    marcoJuridico: [
      { id: 1, nombre: "Ley Federal del Trabajo", descripcion: "Normativa laboral aplicable" },
      { id: 2, nombre: "Reglamento Interior", descripcion: "Reglamento interno de la organización" },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Detalle de Unidad Responsable</h1>
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
              className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
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
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Actas de Entrega
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link href="/dashboard/unidades" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Volver a Unidades
              </Link>
            </Button>

            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">{unidad.nombre}</h2>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/unidades/${unidad.id}/editar`}>Editar</Link>
                </Button>
                <Button asChild>
                  <Link href={`/dashboard/reportes/generar?unidad=${unidad.id}`} className="gap-2">
                    <FileText className="h-4 w-4" /> Generar Reporte
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Responsable</p>
                  <p className="text-lg font-semibold">{unidad.responsable}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fecha de Creación</p>
                  <p className="text-lg font-semibold">{unidad.fechaCreacion}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ID</p>
                  <p className="text-lg font-semibold">{unidad.id}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground">Descripción</p>
                <p className="mt-1">{unidad.descripcion}</p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="recursos" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="recursos" className="gap-2">
                <Briefcase className="h-4 w-4" /> Recursos
              </TabsTrigger>
              <TabsTrigger value="personal" className="gap-2">
                <Users className="h-4 w-4" /> Personal
              </TabsTrigger>
              <TabsTrigger value="documentos" className="gap-2">
                <Archive className="h-4 w-4" /> Documentos
              </TabsTrigger>
              <TabsTrigger value="marco-juridico" className="gap-2">
                <Book className="h-4 w-4" /> Marco Jurídico
              </TabsTrigger>
              <TabsTrigger value="actas" className="gap-2">
                <FileCheck className="h-4 w-4" /> Actas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recursos">
              <Card>
                <CardHeader>
                  <CardTitle>Recursos Materiales</CardTitle>
                  <CardDescription>Listado de recursos asignados a esta unidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-2 text-left font-medium">ID</th>
                          <th className="p-2 text-left font-medium">Tipo</th>
                          <th className="p-2 text-left font-medium">Nombre</th>
                          <th className="p-2 text-left font-medium">Cantidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unidad.recursos.map((recurso) => (
                          <tr key={recurso.id} className="border-b">
                            <td className="p-2">{recurso.id}</td>
                            <td className="p-2">{recurso.tipo}</td>
                            <td className="p-2">{recurso.nombre}</td>
                            <td className="p-2">{recurso.cantidad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">
                    Agregar Recurso
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal</CardTitle>
                  <CardDescription>Listado de personal asignado a esta unidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-2 text-left font-medium">ID</th>
                          <th className="p-2 text-left font-medium">Nombre</th>
                          <th className="p-2 text-left font-medium">Cargo</th>
                          <th className="p-2 text-left font-medium">Fecha de Ingreso</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unidad.personal.map((persona) => (
                          <tr key={persona.id} className="border-b">
                            <td className="p-2">{persona.id}</td>
                            <td className="p-2">{persona.nombre}</td>
                            <td className="p-2">{persona.cargo}</td>
                            <td className="p-2">{persona.fechaIngreso}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">
                    Agregar Personal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentos">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                  <CardDescription>Archivos documentales de la unidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-2 text-left font-medium">ID</th>
                          <th className="p-2 text-left font-medium">Nombre</th>
                          <th className="p-2 text-left font-medium">Tipo</th>
                          <th className="p-2 text-left font-medium">Fecha de Creación</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unidad.documentos.map((documento) => (
                          <tr key={documento.id} className="border-b">
                            <td className="p-2">{documento.id}</td>
                            <td className="p-2">{documento.nombre}</td>
                            <td className="p-2">{documento.tipo}</td>
                            <td className="p-2">{documento.fechaCreacion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">
                    Agregar Documento
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marco-juridico">
              <Card>
                <CardHeader>
                  <CardTitle>Marco Jurídico</CardTitle>
                  <CardDescription>Normativas y leyes aplicables</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-2 text-left font-medium">ID</th>
                          <th className="p-2 text-left font-medium">Nombre</th>
                          <th className="p-2 text-left font-medium">Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unidad.marcoJuridico.map((marco) => (
                          <tr key={marco.id} className="border-b">
                            <td className="p-2">{marco.id}</td>
                            <td className="p-2">{marco.nombre}</td>
                            <td className="p-2">{marco.descripcion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">
                    Agregar Marco Jurídico
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actas">
              <Card>
                <CardHeader>
                  <CardTitle>Actas de Entrega-Recepción</CardTitle>
                  <CardDescription>Historial de actas relacionadas con esta unidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="p-2 text-left font-medium">ID</th>
                          <th className="p-2 text-left font-medium">Fecha</th>
                          <th className="p-2 text-left font-medium">Servidor Saliente</th>
                          <th className="p-2 text-left font-medium">Servidor Entrante</th>
                          <th className="p-2 text-left font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">1</td>
                          <td className="p-2">10/05/2023</td>
                          <td className="p-2">Roberto Gómez</td>
                          <td className="p-2">María González</td>
                          <td className="p-2">
                            <Button variant="ghost" size="sm">
                              Ver PDF
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4" asChild>
                    <Link href={`/dashboard/actas/nueva?unidad=${unidad.id}`}>Crear Nueva Acta</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
