import Button from "../components/Button/button"

function HomePage() {
  return (
    <div>
      <p className="bg-blue-300 text-gray-200">Introduction to React.js</p>
      <div className="flex space-x-4 my-4 p-4 border-2">
        <Button>Label</Button>
        <Button disabled>Label</Button>
        <Button appearance="soft">Label</Button>
        <Button appearance="soft" disabled>
          Label
        </Button>
        <Button appearance="danger">Label</Button>
        <Button appearance="danger" disabled>
          Label
        </Button>
        <Button appearance="link">Label</Button>
        <Button appearance="link" disabled>
          Label
        </Button>
      </div>
    </div>
  )
}

export default HomePage
