<template>
    <el-row :gutter="20" style="margin-bottom: 0.5em;">
        <el-col :span="4">
            <div>
                <slot name="title">空</slot>
            </div>
        </el-col>
        <el-col :span="16">
            <div>
                <slot>无说明</slot>
            </div>
        </el-col>
        <el-col :span="4">
            <div>
                <slot name="setting">无操作</slot>
            </div>
        </el-col>
    </el-row>
</template>
