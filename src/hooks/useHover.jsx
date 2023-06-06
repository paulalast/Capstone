import { useState, useEffect, useRef } from "react"

function useHover() {
	const [hovered, setHovered] = useState(false)
	const ref = useRef(null)

	function enter() {
		setHovered(true)
	}

	function leave() {
		setHovered(false)
	}

	useEffect(() => {
		const monitoredElement = ref.current
		if (monitoredElement) {
			monitoredElement.addEventListener("mouseenter", enter)
			monitoredElement.addEventListener("mouseleave", leave)
		}
		return () => {
			if (monitoredElement) {
				monitoredElement.removeEventListener("mouseenter", enter)
				monitoredElement.removeEventListener("mouseleave", leave)
			}
		}
	}, [])

	return [hovered, ref]
}

export default useHover
