import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { qrMatrix } from '@/content/qrMatrix';

export default function QRCodeBlock() {
  const cellSize = 4;
  const size = qrMatrix.length * cellSize;

  return (
    <Card className="bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center">Scan to Contact</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="rounded-lg bg-white p-4">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="h-auto w-full max-w-[200px]"
          >
            {qrMatrix.map((row, y) =>
              row.map((cell, x) =>
                cell ? (
                  <rect
                    key={`${x}-${y}`}
                    x={x * cellSize}
                    y={y * cellSize}
                    width={cellSize}
                    height={cellSize}
                    fill="#000000"
                  />
                ) : null
              )
            )}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
