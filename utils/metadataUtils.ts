
interface MetadataParams {
  params: { title: string; description: string; };
  searchParams?: string
}

interface MetadataResponse {
  title: string;
  description: string;
}

// TODO: no se pudo generar metadata en componente con 'use client'. Revisar
export async function useGenerateMetadata({ params }: MetadataParams): Promise<MetadataResponse> {
  return {
    title: `Puerto Montt - ${params.title}`,
    description: `${params.description}`
  };
}
