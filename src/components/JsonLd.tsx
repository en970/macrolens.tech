/**
 * Server component that emits a `<script type="application/ld+json">` tag
 * for one schema.org object or an array of them.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
