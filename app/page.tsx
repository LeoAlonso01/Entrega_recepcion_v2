import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Users, Building, FileCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary px-6 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Sistema de Gestión de Unidades</h1>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="secondary">Iniciar Sesión</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Sistema de Gestión de Unidades Responsables</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Gestione usuarios, unidades responsables, recursos y genere actas de entrega-recepción de manera
              eficiente.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Comenzar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Características Principales</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary" />
                  <CardTitle className="mt-4">Gestión de Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Administre usuarios y asigne responsabilidades sobre unidades específicas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Building className="h-12 w-12 text-primary" />
                  <CardTitle className="mt-4">Unidades Responsables</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Registre y gestione información detallada de cada unidad responsable.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary" />
                  <CardTitle className="mt-4">Reportes en PDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Genere reportes detallados en PDF con toda la información recopilada.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileCheck className="h-12 w-12 text-primary" />
                  <CardTitle className="mt-4">Actas de Entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Cree actas de entrega-recepción con todos los datos necesarios.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted px-6 py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sistema de Gestión de Unidades Responsables</p>
        </div>
      </footer>
    </div>
  )
}
