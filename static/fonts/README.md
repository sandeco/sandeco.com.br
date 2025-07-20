# Família de Fontes SenticoSansDT

## 📁 Estrutura de Arquivos

Para usar a família SenticoSansDT, você precisa adicionar os seguintes arquivos nesta pasta:

### Fontes Normais
- `SenticoSansDT-Thin.ttf` (100)
- `SenticoSansDT-Light.ttf` (300)
- `SenticoSansDT-Regular.ttf` (400)
- `SenticoSansDT-Medium.ttf` (500)
- `SenticoSansDT-Bold.ttf` (700)
- `SenticoSansDT-ExtraBold.ttf` (800)

### Fontes Itálicas
- `SenticoSansDT-ThinItalic.ttf` (100)
- `SenticoSansDT-LightItalic.ttf` (300)
- `SenticoSansDT-Italic.ttf` (400)
- `SenticoSansDT-MediumItalic.ttf` (500)
- `SenticoSansDT-BoldItalic.ttf` (700)
- `SenticoSansDT-ExtraBoldIta.ttf` (800)

## 🎨 Como Usar

### Classes CSS Disponíveis

#### Pesos Normais
```css
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-regular { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
```

#### Pesos Itálicos
```css
.font-italic { font-style: italic; }
.font-thin-italic { font-weight: 100; font-style: italic; }
.font-light-italic { font-weight: 300; font-style: italic; }
.font-regular-italic { font-weight: 400; font-style: italic; }
.font-medium-italic { font-weight: 500; font-style: italic; }
.font-bold-italic { font-weight: 700; font-style: italic; }
.font-extrabold-italic { font-weight: 800; font-style: italic; }
```

### Exemplos de Uso

```html
<!-- Título principal -->
<h1 class="font-extrabold">Título Principal</h1>

<!-- Subtítulo em itálico -->
<h2 class="font-extrabold-italic">Subtítulo</h2>

<!-- Texto normal -->
<p class="font-regular">Texto do corpo</p>

<!-- Destaque -->
<span class="font-bold">Destaque importante</span>

<!-- Texto em itálico -->
<em class="font-italic">Texto em itálico</em>
```

## 📱 Responsividade

A fonte SenticoSansDT é otimizada para todos os dispositivos e inclui:

- **font-display: swap** para carregamento otimizado
- **Fallbacks** para sistemas que não suportam a fonte
- **Suporte completo** a todos os pesos e estilos

## 🔧 Instalação

1. Adicione os arquivos de fonte na pasta `static/fonts/`
2. Certifique-se de que o arquivo `fonts.css` está sendo carregado
3. Use as classes CSS conforme necessário

## 📋 Notas

- A fonte é aplicada automaticamente a todo o site
- Use as classes utilitárias para diferentes pesos
- A fonte ExtraBold Italic (800 italic) é especialmente destacada para títulos 