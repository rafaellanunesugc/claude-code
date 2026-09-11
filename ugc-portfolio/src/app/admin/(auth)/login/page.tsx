import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink-900/[0.03] px-5">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-ink-900">Painel administrativo</h1>
        <p className="mt-1 text-sm text-ink-700">
          Acesso restrito. Entre com seu email e senha do Supabase.
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
