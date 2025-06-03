import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Building, FileText, FileCheck, Plus } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Panel de Control</h1>
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
              className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
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
              className="flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Actas de Entrega
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Bienvenido al Sistema</h2>
            <p className="text-muted-foreground">Gestione usuarios, unidades responsables y genere reportes</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Usuarios</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">Usuarios registrados</p>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/dashboard/usuarios">Ver Usuarios</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Unidades</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Unidades responsables</p>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/dashboard/unidades">Ver Unidades</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Reportes</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">Reportes generados</p>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/dashboard/reportes">Ver Reportes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Actas</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Actas de entrega</p>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/dashboard/actas">Ver Actas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2" asChild>
                  <Link href="/dashboard/usuarios/nuevo">
                    <Plus className="h-4 w-4" /> Nuevo Usuario
                  </Link>
                </Button>
                <Button className="w-full justify-start gap-2" asChild>
                  <Link href="/dashboard/unidades/nueva">
                    <Plus className="h-4 w-4" /> Nueva Unidad Responsable
                  </Link>
                </Button>
                <Button className="w-full justify-start gap-2" asChild>
                  <Link href="/dashboard/reportes/nuevo">
                    <Plus className="h-4 w-4" /> Generar Reporte
                  </Link>
                </Button>
                <Button className="w-full justify-start gap-2" asChild>
                  <Link href="/dashboard/actas/nueva">
                    <Plus className="h-4 w-4" /> Crear Acta de Entrega
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas acciones realizadas en el sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Acta de entrega creada</p>
                      <p className="text-xs text-muted-foreground">Unidad de Recursos Humanos</p>
                      <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Usuario actualizado</p>
                      <p className="text-xs text-muted-foreground">Juan Pérez</p>
                      <p className="text-xs text-muted-foreground">Hace 5 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Unidad responsable creada</p>
                      <p className="text-xs text-muted-foreground">Departamento de Finanzas</p>
                      <p className="text-xs text-muted-foreground">Hace 1 día</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
