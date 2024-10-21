import React, { Suspense } from 'react'
import Layout from './layout'
import Loading from './loading'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
      <Layout>
          <Suspense fallback={<Loading />}>
              <Button>Click me</Button>
            </Suspense>
    </Layout>
  )
}
