import { createClient } from "@/prismicio";
import NavContainer from "@/components/StyledHeader/NavContainer";

const client = createClient();
const navigation = await client.getSingle("navigation");
const settings = await client.getSingle("settings");

export default async function StyledHeader() {
  return <NavContainer navigation={navigation} settings={settings} />;
}
