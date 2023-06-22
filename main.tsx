function NavLink(props: { text: string, href: string}) {
  return (
    <li>
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

const text = "GitHub";
const href = "https://github.com";

console.dir({
  "Bare Element": <li>
    <a href={href}>{text}</a>
  </li>,
});

try {
  <NavLink href={href} text={text}/>
} catch (error) {
  console.dir({
    "Function ELement": error,
  })
}
