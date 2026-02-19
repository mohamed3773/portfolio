export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full border-4 border-muted opacity-20" />
                <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
            </div>
        </div>
    );
}
