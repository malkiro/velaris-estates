export function formatNearbySections(data = []) {
  return data
    .map((section) => {
      const rows = section?.title?.body?.rows || [];

      if (!rows.length) return null;

      // ---- FIRST ROW (TITLE + ICON) ----
      const titleCell = rows[0]?.cells?.[0];
      const iconCell = rows[0]?.cells?.[1];

      const title = titleCell?.content?.[0]?.text || "";

      const iconSpan = iconCell?.content?.[0]?.spans?.[0]?.data || null;

      const icon = iconSpan
        ? {
            url: iconSpan.url,
            width: Number(iconSpan.width),
            height: Number(iconSpan.height),
            alt: iconSpan.name || title,
          }
        : null;

      // ---- OTHER ROWS (ITEMS) ----
      const items = rows.slice(1).map((row) => {
        const name = row?.cells?.[0]?.content?.[0]?.text || "";

        const distance = row?.cells?.[1]?.content?.[0]?.text || "";

        return { name, distance };
      });

      return {
        title,
        icon,
        items,
      };
    })
    .filter(Boolean);
}
