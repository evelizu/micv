import { ImageResponse } from 'next/og'

export const alt = 'CV | Esmeralda'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFB6C1, #87CEFA)',
          color: 'white',
          fontSize: 300,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        CV
      </div>
    ),
    { ...size }
  )
}
