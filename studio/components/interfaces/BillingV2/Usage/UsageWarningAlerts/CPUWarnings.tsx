import { AlertTitle } from '@ui/components/shadcn/ui/alert'
import Link from 'next/link'
import { AlertDescription_Shadcn_, Alert_Shadcn_, Button, IconAlertCircle } from 'ui'

interface CPUWarningsProps {
  isFreeTier: boolean
  upgradeUrl: string
}

const CPUWarnings = ({ isFreeTier, upgradeUrl }: CPUWarningsProps) => {
  // [Joshen TODO] Need to implement the necessary conditionals for rendering the warnings
  const isApproaching = false
  const isExceeded = false

  if (isApproaching) {
    return (
      <Alert_Shadcn_ variant="warning">
        <IconAlertCircle />
        <AlertTitle>Your max CPU usage has exceeded 80%</AlertTitle>
        <AlertDescription_Shadcn_>
          High CPU usage could result in slower queries, disruption of daily back routines, and in
          rare cases, your instance may become unresponsive. If you need more resources, consider
          upgrading to a larger compute add-on.
        </AlertDescription_Shadcn_>
        <div className="mt-3 flex items-center space-x-2">
          <Link href="https://supabase.com/docs/guides/platform/exhaust-cpu">
            <a>
              <Button type="default">Learn more</Button>
            </a>
          </Link>
          <Link href={upgradeUrl}>
            <a>
              <Button type="warning">
                {isFreeTier ? 'Upgrade project' : 'Change compute add-on'}
              </Button>
            </a>
          </Link>
        </div>
      </Alert_Shadcn_>
    )
  }

  if (isExceeded) {
    return (
      <Alert_Shadcn_ variant="destructive">
        <IconAlertCircle />
        <AlertTitle>Your max CPU usage has reached 100%</AlertTitle>
        <AlertDescription_Shadcn_>
          High CPU usage could result in slower queries, disruption of daily back routines, and in
          rare cases, your instance may become unresponsive. If you need more resources, consider
          upgrading to a larger compute add-on.
        </AlertDescription_Shadcn_>
        <div className="mt-3 flex items-center space-x-2">
          <Link href="https://supabase.com/docs/guides/platform/exhaust-cpu">
            <a>
              <Button type="default">Learn more</Button>
            </a>
          </Link>
          <Link href={upgradeUrl}>
            <a>
              <Button type="danger">
                {isFreeTier ? 'Upgrade project' : 'Change compute add-on'}
              </Button>
            </a>
          </Link>
        </div>
      </Alert_Shadcn_>
    )
  }

  return null
}

export default CPUWarnings
