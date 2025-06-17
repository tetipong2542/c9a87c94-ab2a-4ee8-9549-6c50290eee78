
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TemplateStoreProvider } from '@/providers/template-store-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Home from '@/pages/Home'
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TemplateStoreProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
        </Router>
        <Toaster />
      </TemplateStoreProvider>
    </ThemeProvider>
  )
}

export default App
