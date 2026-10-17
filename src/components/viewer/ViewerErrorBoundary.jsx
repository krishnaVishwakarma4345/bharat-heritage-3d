import { Component } from 'react'

class ViewerErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="flex min-h-80 items-center justify-center bg-bronze-900 p-8 text-center text-ivory">
          <div>
            <p className="font-display text-2xl font-bold">3D model could not be loaded</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-ivory/75">
              The model may be missing, too large, or in an unsupported format. The monument record and photographs remain available.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ViewerErrorBoundary
