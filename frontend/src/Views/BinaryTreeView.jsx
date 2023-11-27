import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BinaryTreeView = ({ treeData }) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (!treeData || !d3Container.current) return;

        // Limpia el contenedor antes de redibujar
        d3.select(d3Container.current).selectAll("*").remove();

        const margin = { top: 50, right: 10, bottom: 50, left: 60 }; // Margen ajustado
        const width = 1060 - margin.left - margin.right;
        const height = 1200 - margin.top - margin.bottom; // Altura aumentada para acomodar el árbol vertical

        const svg = d3.select(d3Container.current)
            .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`) // Uso de viewBox para responsividad
            .style("font", "10px sans-serif")
            .style("user-select", "none")
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Crea el layout del árbol de manera vertical
        const treemap = d3.tree().size([height, width]); // Tamaño ajustado para la orientación vertical

        let nodes = d3.hierarchy(treeData, d => d.children);
        nodes = treemap(nodes);

        // Dibuja los enlaces de manera vertical
        svg.selectAll(".link")
            .data(nodes.descendants().slice(1))
            .join("path")
            .attr("class", "link")
            .attr("d", d => {
                return `M${d.x},${d.y}C${d.x},${(d.y + d.parent.y) / 2} ${d.x},${(d.y + d.parent.y) / 2} ${d.parent.x},${d.parent.y}`;
            })
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5);

        // Dibuja cada nodo de manera vertical
        const node = svg.selectAll(".node")
            .data(nodes.descendants())
            .join("g")
            .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
            .attr("transform", d => `translate(${d.x},${d.y})`);

        node.append("circle")
            .attr("r", 16) // Radio del círculo aumentado para visibilidad

        node.append("text")
            .attr("dy", "0.31em")
            .attr("x", d => d.children ? -22 : 22) // Posición del texto ajustada
            .attr("text-anchor", d => d.children ? "end" : "start")
            .text(d => d.data.name)
            .style("fill", "black") // Color del texto cambiado a negro para visibilidad
            .style("font-size", "16px"); // Tamaño de la fuente aumentado para visibilidad

    }, [treeData]);

    return <svg ref={d3Container} style={{ width: "100%", height: "auto" }} />;
};

export default BinaryTreeView;
