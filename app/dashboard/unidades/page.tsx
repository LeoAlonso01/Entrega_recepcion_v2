import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Plus, Search, FileText, Eye, Pencil } from "lucide-react"

export default function UnidadesPage() {
  const unidades = [
    { id: 1, nombre: "Recursos Humanos", responsable: "María González", recursos: 24, documentos: 56 },
    { id: 2, nombre: "Finanzas", responsable: "Carlos Rodríguez", recursos: 18, documentos: 42 },
    { id: 3, nombre: "Sistemas", responsable: "Ana López", recursos: 32, documentos: 78 },
    { id: 4, nombre: "Jurídico", responsable: "Roberto Martínez", recursos: 15, documentos: 63 },
    { id: 5, nombre: "Administración", responsable: "Laura Sánchez", recursos: 27, documentos: 51 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Unidades Responsables</h1>
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
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Unidades Responsables</h2>
            <Button asChild>
              <Link href="/dashboard/unidades/nueva" className="gap-2">
                <Plus className="h-4 w-4" /> Nueva Unidad
              </Link>
            </Button>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filtros de Búsqueda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <Input placeholder="Buscar por nombre o responsable" className="w-full" />
                </div>
                <Button variant="secondary" className="gap-2">
                  <Search className="h-4 w-4" /> Buscar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Responsable</TableHead>
                    <TableHead>Recursos</TableHead>
                    <TableHead>Documentos</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {unidades.map((unidad) => (
                    <TableRow key={unidad.id}>
                      <TableCell>{unidad.id}</TableCell>
                      <TableCell className="font-medium">{unidad.nombre}</TableCell>
                      <TableCell>{unidad.responsable}</TableCell>
                      <TableCell>{unidad.recursos}</TableCell>
                      <TableCell>{unidad.documentos}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/unidades/${unidad.id}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver detalles</span>
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/unidades/${unidad.id}/editar`}>
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Editar</span>
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/reportes/generar?unidad=${unidad.id}`}>
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Generar reporte</span>
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
