<template>
    <div class="konva-container">
        <div class="left">
            <v-stage :config="configKonva" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown">
                <v-layer>
                    <template v-for="shape in configKonva.layer" :key="shape.id">
                        <component :is="`v-${shape.type}`" :config="shape" @dragend="(e: any) => onDragEnd(e, shape)"
                            @transformend="(e: any) => handleTransformEnd(e, shape)"></component>
                    </template>
                    <v-transformer ref="transformer" />
                </v-layer>
            </v-stage>
        </div>
        <div class="right">
            <div class="shape-button" v-for="shape in configKonva.layer" :key="shape.id">
                <span>{{ shape.type }}</span>
                <el-button type="primary" @click="editShape(shape)" :icon="Edit" circle />
                <el-button type="danger" @click="delShape(shape)" :icon="Delete" circle />
            </div>
            <div class="shape-button">
                <el-button type="primary" @click="addShape('circle')" :icon="Delete" >circle</el-button>
                <el-button type="primary" @click="addShape('img')" :icon="Delete" >img</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Delete,
    Edit,
    Plus
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const configKonva = reactive({
    id: crypto.randomUUID(),
    type: 'stage',
    width: 600,
    height: 600,
    layer: [
        {
            id: crypto.randomUUID(),
            type: 'circle',
            x: 100,
            y: 100,
            radius: 70,
            fill: "red",
            stroke: "black",
            strokeWidth: 4,
            draggable: true
        },
        {
            id: crypto.randomUUID(),
            type: 'img',
            x: 50,
            y: 50,
            image: 'https://img-s.msn.cn/tenant/amp/entityid/AA13Q6AL.img',
            width: 100,
            height: 100,
            draggable: true
        }
    ]
})

const onDragEnd = (e: any, shape: any) => {
    const { x, y } = e.target._lastPos
    shape.x = x
    shape.y = y
}


const transformer = ref()
const selectedShapeId = ref('')
const handleTransformEnd = (e: any, shape: any) => {
    // update the state
    shape.x = e.target.x();
    shape.y = e.target.y();
    shape.rotation = e.target.rotation();
    shape.scaleX = e.target.scaleX();
    shape.scaleY = e.target.scaleY();
}

const handleStageMouseDown = (e: any) => {
    // clicked on stage - clear selection
    if (e.target === e.target.getStage()) {
        selectedShapeId.value = '';
        updateTransformer();
        return;
    }

    // clicked on transformer - do nothing
    const clickedOnTransformer = e.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
        return;
    }

    // find clicked rect by its name
    const id = e.target.id();
    const shape = configKonva.layer.find((r) => r.id === id);

    if (shape) {
        selectedShapeId.value = id;
    } else {
        selectedShapeId.value = '';
    }
    updateTransformer();
}

const updateTransformer = () => {
    const transformerNode = transformer.value.getNode();
    const stage = transformerNode.getStage();
    const selectedNode = stage.findOne((node: any) => node.id() === selectedShapeId.value);
    // do nothing if selected node is already attached
    if (selectedNode === transformerNode.node()) {
        return;
    }

    if (selectedNode) {
        // attach to another node
        transformerNode.nodes([selectedNode]);
    } else {
        // remove transformer
        transformerNode.nodes([]);
    }
}

const editShape = (shape: any) => {

}

const delShape = (shape: any) => {

}

const addShape = (shapeType: string) => {
    switch(shapeType) {
        case 'circle':

            break
        case 'img':

            break
        default: 

    }
}

</script>

<style scoped lang="scss">
.konva-container {
    outline: solid #f2f2f2 1px;
    display: flex;
    // width: 100%;
    // height: 100%;

    min-width: 900px;
    min-height: 600px;
    max-width: 900px;
    max-height: 600px;

    .left {
        background-color: #f2f2f2;
        flex: 1;
        min-width: 600px;
    }

    .right {
        min-width: 300px;
    }
}

.shape-button {
    margin: 8px 20px;
    padding: 4px 20px;
    display: flex;
    align-items: center;
    background: #a0cfff;
    border-radius: 4px;

    &>span {
        flex: 1;
    }

    &:hover {
        background: #337ecc;
    }

}
</style>