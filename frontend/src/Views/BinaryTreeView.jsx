import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BinaryTreeView = ({ treeData }) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (!treeData || !d3Container.current) return;

        // Limpia el contenedor antes de redibujar
        d3.select(d3Container.current).selectAll("*").remove();

        const margin = { top: 20, right: 120, bottom: 20, left: 120 };
        const width = 960 - margin.right - margin.left;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3.select(d3Container.current)
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Crea el layout del árbol
        const treemap = d3.tree().size([height, width]);
        let nodes = d3.hierarchy(treeData, d => d.children);
        nodes = treemap(nodes);

        // Dibuja los enlaces
        svg.selectAll(".link")
            .data(nodes.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .attr("d", d => {
                return `M${d.y},${d.x}C${(d.y + d.parent.y) / 2},${d.x} ${(d.y + d.parent.y) / 2},${d.parent.x} ${d.parent.y},${d.parent.x}`;
            })
            .attr("fill", "none")
            .attr("stroke", "#ccc")
            .attr("stroke-width", 2);


            
        // Dibuja cada nodo
        const node = svg.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
            .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

        node.append("circle")
            .attr("r", 10);

        node.append("text")
            .attr("dy", ".35em")
            .attr("x", d => d.children ? -13 : 13)
            .style("text-anchor", d => d.children ? "end" : "start")
            .text(d => d.data.name);
    }, [treeData]);

    return <svg ref={d3Container} />;
};

export default BinaryTreeView;
