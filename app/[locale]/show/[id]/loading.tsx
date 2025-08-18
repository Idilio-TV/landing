export default function ShowLoading() {
    return (
        <div className="min-h-screen bg-black">
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section Skeleton */}
                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    {/* Poster Skeleton */}
                    <div className="relative">
                        <div className="w-full h-96 bg-gray-800 rounded-lg shadow-2xl animate-pulse" />
                    </div>

                    {/* Show Info Skeleton */}
                    <div className="space-y-6">
                        <div className="h-12 bg-white/20 rounded-lg animate-pulse" />
                        <div className="space-y-3">
                            <div className="h-4 bg-white/20 rounded animate-pulse" />
                            <div className="h-4 bg-white/20 rounded animate-pulse w-3/4" />
                            <div className="h-4 bg-white/20 rounded animate-pulse w-1/2" />
                        </div>

                        {/* CTA Skeleton */}
                        <div className="h-14 bg-white/20 rounded-full animate-pulse w-48" />
                    </div>
                </div>

                {/* Episodes Section Skeleton */}
                <div className="space-y-8">
                    <div className="h-10 bg-white/20 rounded-lg animate-pulse w-48 mx-auto" />

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <div className="h-8 bg-white/20 rounded animate-pulse w-32 mb-4" />

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-white/20 rounded animate-pulse w-32" />
                                            <div className="h-3 bg-white/20 rounded animate-pulse w-24" />
                                        </div>
                                    </div>
                                    <div className="h-4 bg-white/20 rounded animate-pulse w-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Skeleton */}
                <div className="text-center mt-16 p-8 bg-gray-800 rounded-2xl">
                    <div className="h-8 bg-white/20 rounded animate-pulse w-64 mx-auto mb-4" />
                    <div className="space-y-3 mb-6">
                        <div className="h-4 bg-white/20 rounded animate-pulse w-96 mx-auto" />
                        <div className="h-4 bg-white/20 rounded animate-pulse w-80 mx-auto" />
                    </div>
                    <div className="h-14 bg-white/20 rounded-full animate-pulse w-48 mx-auto" />
                </div>
            </div>
        </div>
    )
} 