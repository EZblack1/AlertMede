import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import "./styles.css"; // Importando o CSS para estilização

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Preencha todos os campos.");
      return;
    }

    // Simulação de autenticação
    if (email === "admin@alertmed.com" && password === "123456") {
      setMessage("Login bem-sucedido! Redirecionando...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      setMessage("Email ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="login-wrapper"
      >
        <Card className="login-card">
          <CardContent className="login-card-content">
            <div className="login-header">
              <h1 className="login-title">AlertMed</h1>
              <p className="login-subtitle">Agendamentos e Notificações de Consultas</p>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
              <div>
                <Label htmlFor="email" className="login-label">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password" className="login-label">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {message && (
                <p style={{ color: "#f87171", textAlign: "center" }}>{message}</p>
              )}
              <Button
                type="submit"
                className="login-button"
              >
                <LogIn className="w-5 h-5" /> Entrar
              </Button>
              <div className="login-links">
                <a href="/esqueci-senha" className="login-link">Esqueci minha senha</a>
                <a href="/registrar" className="login-link">Registrar-se</a>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
