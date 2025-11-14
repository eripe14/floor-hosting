type Particle = {
    left: number;
    top: number;
    duration: number;
    delay: number;
};

function createParticles(count: number): Particle[] {
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
        const left = (i * 37) % 100;
        const top = (i * 61) % 100;
        const duration = 16 + ((i * 3) % 10);
        const delay = ((i * 7) % 20) / 4;

        particles.push({ left, top, duration, delay });
    }

    return particles;
}

const PRECOMPUTED = createParticles(60);

export default function FloatingParticles({ count = 30 }: { count?: number }) {
    const particles = PRECOMPUTED.slice(0, count);

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-30">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-sky-400/30"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        animation: `float ${p.duration}s ease-in-out infinite`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
