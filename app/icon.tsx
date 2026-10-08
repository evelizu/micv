import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          borderRadius: '20%',
        }}
      >
        CV
      </div>
    ),
    { ...size }
  )
}
