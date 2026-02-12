'use client';

export default function InteractiveBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 transform-gpu overflow-hidden bg-[#020617]">
            {/* Ultra-Fast Static Noise PNG (Base64) - 0.1kb */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAApb3u1AAAABlBMVEUAAAD///+l2Z/dAAAAb0lEQVR4XmP4y8CAnwEMuPCxwKSDhYEFJhwsmHSwMLDAhIMFkw4WBhaYcLBg0sHCwAITDhZMOlgYWGDCwYJJBwsDC0w4WDDpYGFggQkHCyYdLAwsMOFgwaSDhYEFJhwsmHSwMLDAhIMFkw4WBhaY8AEA490S709I2S8AAAAASUVORK5CYII=")`,
                }}
            />

            {/* Brushed Metal Texture - CSS Only */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 60px)',
                }}
            />

            {/* Simplified Metallic Shine */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 20% 30%, rgba(20, 184, 166, 0.08) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)',
                    }}
                />
            </div>

            {/* Subtle Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.4) 100%)',
                }}
            />
        </div>
    );
}
