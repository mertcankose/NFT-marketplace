import styles from "../styles/component.module.css"
import Button from "../components/button/button"

function Component() {
  return (
    <div>
      <div className="h-8 leading-8">
        <h1 className="align-middle text-center">Buttons</h1>
      </div>

      <div className={styles.buttonBox}>
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

      <div className="h-8 leading-8">
        <h1 className="align-middle text-center">Cards</h1>
      </div>

      <div className="h-8 leading-8">
        <h1 className="align-middle text-center">Header</h1>
      </div>

      <div className="h-8 leading-8">
        <h1 className="align-middle text-center">Footer</h1>
      </div>

      <div className="h-8 leading-8">
        <h1 className="align-middle text-center">Slider</h1>
      </div>
    </div>
  )
}

export default Component
