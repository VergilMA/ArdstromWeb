export const metadata = {
  title: 'Dante Ardström',
  description: 'One of/in a 10 000 000 000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
